export default async function({ app, store, redirect, route }) {
  switch (route.name) {
    case 'index':
    case 'rick-and-morty':
      if (!store.state.logged) {
        redirect('/login');
      }
      return;
    case 'login':
      if (store.state.logged) {
        redirect('/');
      }
  }
}
