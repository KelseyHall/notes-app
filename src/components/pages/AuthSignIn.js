import React from 'react';
import NotesApp from './Notes';
export const auth = true;

const RunApp = ({ Notes, setNotes }) => {
  if (!auth) {
    return (
      <div>
        <h2>Please Sign in</h2>
      </div>
    );
  } else {
    return <NotesApp Notes={Notes} setNotes={setNotes} />;
  }
};

export default RunApp;
