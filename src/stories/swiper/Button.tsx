import { useState } from 'react';

const Button = () => {
	const [state, setState] = useState(0);
	return <button onClick={() => setState(state + 1)}>{state}</button>;
};

export default Button;
