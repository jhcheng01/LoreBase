import React, { useState } from 'react';

type Character = {
  nickname: string;
  forename: string;
  surname: string;
  description: string;
  age: string;
  status: string;
};

const buttonStyle = {
  backgroundColor: 'white',
  color: 'black',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginLeft: '20px',
};

const CharacterLogger: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [newCharacter, setNewCharacter] = useState<Character>({ nickname: '', forename: '', surname: '', description: '', age: '', status: 'Alive' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setNewCharacter(prevCharacter => ({
      ...prevCharacter,
      [name]: value
    }));
  };

  const addCharacterToStory = () => {
    setCharacters(prevCharacters => [...prevCharacters, newCharacter]);
    setNewCharacter({ nickname: '', forename: '', surname: '', description: '', age: '', status: '' });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">LoreBase Character Creator</h1>

      <div>
        <input
          type="text"
          value={newCharacter.nickname}
          name="nickname"
          onChange={handleChange}
          placeholder="Nickname"
          className="bg-white-100 border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          value={newCharacter.forename}
          name="forename"
          onChange={handleChange}
          placeholder="Forename"
          className="bg-white-100 border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          value={newCharacter.surname}
          name="surname"
          onChange={handleChange}
          placeholder="Surname"
          className="bg-white-100 border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          value={newCharacter.description}
          name="description"
          onChange={handleChange}
          placeholder="Description"
          className="bg-white-100 border border-gray-300 rounded-md p-2"
        />
        <input
          type="number"
          value={newCharacter.age}
          name="age"
          onChange={handleChange}
          placeholder="Age"
          className="bg-white-100 border border-gray-300 rounded-md p-2"
        />
        <select
          name="status"
          value={newCharacter.status}
          onChange={handleChange}
          className="bg-white-100 border border-gray-300 rounded-md p-2"
        >
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
        <button style={buttonStyle} onClick={addCharacterToStory}>
          Insert Character
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Characters in Storyline</h2>
        <ul>
          {characters.map((character, index) => (
            <li key={index}>
              {character.nickname} - Forename: {character.forename} - Surname: {character.surname} - Age: {character.age} - Status: {character.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterLogger;
