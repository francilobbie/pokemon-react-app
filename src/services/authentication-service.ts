export default class AuthenticationService {
  static isAuthenticated: boolean = false;

  static login(username: string, password: string): Promise<boolean> {
    const isAuthenticated = (username === 'pikachu' && password === 'pikachu');

    return new Promise(resolve => {
      setTimeout(() => {
        AuthenticationService.isAuthenticated = isAuthenticated;
        resolve(isAuthenticated);
      }, 1000);
    });
  }
}
