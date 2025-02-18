class LocalStorageService {
  public getItem(key: string) {
    let selectedFruits: string | null = localStorage.getItem(key);

    if (selectedFruits === null) {
      return null
    }
    
    return JSON.parse(selectedFruits);
  }
  public setItem(key: string, value: unknown) {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
  }
}

const localStorageServcie = new LocalStorageService();
export default localStorageServcie;