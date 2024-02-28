import React from "react";

const App = () => (
  <ResponsiveContainer>
    <Header />
    <Navigation />
    <UserCtx.Consumer>
      {({user}) => (
        <>
          <UserDetails user={user} />
          <AppPreferencesCtx.Consumer>
            {({location}) => (
              <Weather location={location}>
                {({conditions}) => <WeatherDisplay conditions={conditions} />}
              </Weather>
            )}
          </AppPreferencesCtx.Consumer>
        </>
      )}
    </UserCtx.Consumer>
  </ResponsiveContainer>
);
