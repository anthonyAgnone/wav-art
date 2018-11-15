import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NavContext from './components/contexts/NavContext';
import Reboot from './components/utility/Reboot';
import App from './App';
import { AuthContextProvider } from './components/contexts/AuthContext';
import AnimateContext from './components/contexts/AnimateContext';

ReactDOM.render(
	<AuthContextProvider>
		<BrowserRouter>
			<Reboot>
				<AnimateContext>
					<NavContext>
						<App />
					</NavContext>
				</AnimateContext>
			</Reboot>
		</BrowserRouter>
	</AuthContextProvider>,
	document.getElementById('root')
);
