import { v4 as uuidv4 } from 'uuid';

export const addNewNote = (e, setNotes) => {
  e.preventDefault();
  const TitleNote = e.target.elements.addNoteTitleForm.value.trim();
  const BodyNote = e.target.elements.addNoteBodyForm.value.trim();

  if (TitleNote.length > 0) {
    setNotes((savedNotes) => [
      ...savedNotes,
      { id: uuidv4(), Note: { title: TitleNote, body: BodyNote } },
    ]);
    e.target.elements.addNoteTitleForm.value = '';
    e.target.elements.addNoteBodyForm.value = '';
  } else {
    console.log('error');
  }
};
export const EditNote = (e, NotesData, Notes, setNotes) => {
  e.preventDefault();
  const TitleNote = e.target.elements.addNoteTitleForm.value.trim();
  const BodyNote = e.target.elements.addNoteBodyForm.value.trim();

  const editNoteItem = Notes.map((eachNote) => {
    if (eachNote.id === NotesData.id) {
      return { ...eachNote, Note: { title: TitleNote, body: BodyNote } };
    } else {
      return eachNote;
    }
  });

  if (TitleNote.length > 0) {
    setNotes(editNoteItem);
  } else {
    console.log('error');
  }
};

export const DeleteNote = (id, Notes, setNotes) => {
  const filterOut = Notes.filter((Note) => Note.id !== id);
  return setNotes(filterOut);
};
