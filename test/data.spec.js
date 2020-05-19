import utils from '../src/javascript/data.js';
import myObject from '../src/data/pokemon/pokemon.js';

describe('utils', () => {
  it('should be an object', () => {
    expect(typeof utils).toBe('object');
  });

  describe('utils.filterData', () => {
    
    it('should be a function', () => {
      expect(typeof utils.filterData).toBe('function')
    });

    it('should return "3" with filter-type "Dragon"', () => {
      expect(utils.filterData(myObject, 'type', 'Dragon').length).toBe(3);
    });

    it('should return "151" with filter-type "All"', () => {
      expect(utils.filterData(myObject, 'all','').length).toBe(151);
    });

    it('should return "28" with filter-type "Fire"', () => {
      expect(utils.filterData(myObject, 'weaknesses', 'Fire').length).toBe(28);
    });

  });

  describe('utils.searchBar', () => {

    it('should return "1" with "bulba"', () => {
      expect(utils.searchBar(myObject, 'bulba').length).toBe(1);
    });
    
    it('should return "1" with "char"', () => {
      expect(utils.searchBar(myObject, 'char').length).toBe(3);
    });

  });

  describe('utils.sortData', () => {

    it('should be a function', () => {
    expect(typeof utils.sortData).toBe('function');
    });

    it('should return "Abra" to "Zubat" with sort order "a-z"', () => {
      expect(utils.sortData(myObject.pokemon, 'name', 'a-z')[0].name).toBe('Abra');
    });

    it('should return "Bulbasaur" to "Mew" with sort order "1-151"', () => {
      expect(utils.sortData(myObject.pokemon, 'num', '1-151')[0].name).toBe('Bulbasaur');
    });

    it('should return "Zubat" to "Abra" with sort order "z-a"', () => {
      expect(utils.sortData(myObject.pokemon, 'name', 'z-a')[0].name).toBe('Zubat');
    });

    it('should return "Mew" to "Bulbasaur" with sort order "151-1"', () => {
      expect(utils.sortData(myObject.pokemon, 'num', '151-1')[0].name).toBe('Mew');
    });
  });

  describe('utils.computeStats', () => {

    it('should be a function', () => {
    expect(typeof utils.computeStats).toBe('function');
    });

    it('should return "2%" with "Dragon" type', () => {
      expect(utils.computeStats(myObject.pokemon)["Dragon"]["percent"]).toBe(2);
    });

    it('should return "9%" with "Grass" type', () => {
      expect(utils.computeStats(myObject.pokemon)["Grass"]["percent"]).toBe(9);
    });

    it('should return "16%" with "Normal" type', () => {
      expect(utils.computeStats(myObject.pokemon)["Normal"]["percent"]).toBe(16);
    });

    it('should return "21%" with "Water" type', () => {
      expect(utils.computeStats(myObject.pokemon)["Water"]["percent"]).toBe(21);
    });
  });
});