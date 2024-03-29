import React, { useState } from "react";

const ReactionForm = ({ thoughtId, error }) => {

const [reactionBody, setBody] = useState('');
const [characterCount, setCharacterCount] = useState(0);

const handleChange = event => {
    if (event.target.value.length <= 280) {
        setBody(event.target.value);
        setCharacterCount(event.target.value.length);
    }
};

const handleFormSubmit = async event => {
    event.preventDefault();
    setBody('');
    setCharacterCount(0);
};

  return (
    <div>
      <p className={`m-0 ${characterCount === 280 || error ? "text-error" : ''}`}>Character Count: {characterCount}/280 {error && <span className="ml-2">Something went wrong...</span>}</p>

      <form className="flex-row justify-center justify-space-between-md align-stretch"
      onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Leave a reaction to this thought..."
          value={reactionBody}
          className="form-input col-12 col-me-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactionForm;
