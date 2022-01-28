import { v4 as uuidv4 } from 'uuid';

export const addNewNote = (e, setNote) => {
  e.preventDefault();
  const Note = e.target.elements.addNoteForm.value.trim();

  if (Note.length > 0) {
    setNote((savedNotes) => [...savedNotes, { id: uuidv4(), Note }]);
    e.target.elements.addNoteForm.value = '';
  } else {
    console.log('error');
  }
};

export const DeleteNote = (id, Notes, setNotes) => {
  const filterOut = Notes.filter((Note) => Note.id !== id);
  return setNotes(filterOut);
};
