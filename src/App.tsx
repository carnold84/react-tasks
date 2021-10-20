import { App as AppContainer, darkTheme, defaultTheme } from 'versify-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoreProvider from './store';
import Home from './views/Home';

const App = () => {
  return (
    <StoreProvider>
      <AppContainer
        selectedThemeId={defaultTheme.id}
        themes={[defaultTheme, darkTheme]}>
        <Router>
          <Switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/:id">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </StoreProvider>
  );
};

export default App;
