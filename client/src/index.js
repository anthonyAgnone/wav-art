import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NavContext from './components/contexts/NavContext';
import Reboot from './components/utility/Reboot';
import App from './App';
import { AuthContextProvider } from './components/contexts/AuthContext';

ReactDOM.render(
	
	<AuthContextProvider>
		<BrowserRouter>
			<Reboot>
				<NavContext>
					<App />
				</NavContext>
			</Reboot>
		</BrowserRouter>
	</AuthContextProvider>,
  document.getElementById('root')
)
