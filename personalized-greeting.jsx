import react, {useState} from 'react';
const App=()=>{
    const [name,setName]=useState('');
        const handleInputChange=(e)=>{
            setName(e.target.value);
        };
        return(
            <div>
                <div>
                    <label htmlFor="nameInput">Enter your name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                {name.trim() !==''&&(
                    <p>Hello {name}!</p>
                )}
            </div>
        );

}
export default App;