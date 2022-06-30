import Realm from 'realm'

export async function getRealmUser() {
    const appId = 'museumguide-uvdib'
    const appConfig = {
        id: appId,
        timeout: 10000
    }
    try {
        const app = new Realm.App(appConfig); // pass in the appConfig variable that you created earlier
        const credentials = Realm.Credentials.anonymous(); // create an anonymous credential
        user = await app.logIn(credentials);
        return user;
      } catch (error) {
          throw `Error logging in anonymously: ${JSON.stringify(error,null,2)}`;
      }
}