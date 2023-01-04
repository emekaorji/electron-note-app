/* eslint-disable consistent-return */
import { useCallback, useDeferredValue, useEffect, useState } from 'react';
import Quill, { TextChangeHandler } from 'quill';
import { Socket } from 'socket.io-client';
import DataProps from 'types/data';
import { Delta } from 'types-quill-delta';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
];

const useEditorSocket = (socket: Socket, currentNote: DataProps) => {
  const [quill, setQuill] = useState<Quill>();
  const deferredQuill = useDeferredValue(quill);

  // Update editor with content of note
  useEffect(() => {
    if (quill == null || currentNote == null) return;

    quill.setContents(currentNote?.content);
    quill.enable();
  }, [quill, currentNote]);

  // Save Content
  useEffect(() => {
    if (socket == null || deferredQuill == null) return;

    const handler: TextChangeHandler = async (_delta, _oldDelta, source) => {
      if (source !== 'user') return;
      await socket.emit('save-content', deferredQuill.getContents());
    };

    deferredQuill.on('text-change', handler);

    return () => {
      deferredQuill.off('text-change', handler);
    };
  }, [deferredQuill, socket]);

  // Send Changes
  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler: TextChangeHandler = (delta, _oldDelta, source) => {
      if (source !== 'user') return;
      socket.emit('send-content', delta);
    };

    quill.on('text-change', handler);

    return () => {
      quill.off('text-change', handler);
    };
  }, [quill, socket]);

  // Receive Changes
  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta: Delta) => {
      quill.updateContents(delta);
    };

    socket.on('receive-change', handler);

    return () => {
      socket.off('receive-change', handler);
    };
  }, [quill, socket]);

  const editorWrapperRef = useCallback(
    (
      editorWrapper: {
        innerHTML: string;
        append: (arg0: HTMLDivElement) => void;
      } | null
    ) => {
      if (editorWrapper == null) return;

      editorWrapper.innerHTML = '';
      const editor = document.createElement('div');
      editorWrapper.append(editor);

      const DeltaImport = Quill.import('delta');
      // eslint-disable-next-line no-new
      const q = new Quill(editor, {
        theme: 'bubble',
        modules: {
          toolbar: toolbarOptions,
          clipboard: {
            matchers: [
              [
                Node.ELEMENT_NODE,
                (_node: never, delta: Delta) => {
                  return delta.compose(
                    new DeltaImport().retain(delta.length(), {
                      color: false,
                      background: false,
                      bold: false,
                      strike: false,
                      underline: false,
                    })
                  );
                },
              ],
            ],
          },
        },
        scrollingContainer:
          document.getElementById('editorWrapper') || undefined,
      });
      q.disable();
      q.setText('Perry Scottish Pie..');
      setQuill(q);
    },
    []
  );

  return { editorWrapperRef };
};

export default useEditorSocket;
