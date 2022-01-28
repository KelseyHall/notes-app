export const addNewNote = (e, setNote) => {
  e.preventDefault();
  const Note = e.target.elements.addNoteForm.value.trim();

  if (Note.length > 0) {
    setNote((savedNotes) => [...savedNotes, { id: Note, Note }]);
    e.target.elements.addNoteForm.value = '';
  } else {
    console.log('error');
  }
};
