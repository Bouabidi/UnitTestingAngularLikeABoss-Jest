import {HeroesComponent} from './heroes.component';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {of} from 'rxjs';
import {fakeAsync, tick} from '@angular/core/testing';

describe('HeroesComponent', () => {
  let heroes: Array<Hero>;
  let mockHeroService: HeroService;
  let component: HeroesComponent;

  beforeEach(() => {
    heroes = [
      {id: 11, name: 'Mr. Nice', strength: 10},
      {id: 12, name: 'Narco', strength: 5},
      {id: 13, name: 'Bombasto', strength: 8},
    ];

    mockHeroService = {
      deleteHero: jest.fn(() => of(null)),
      addHero: jest.fn(() => of(null)),
    } as any as HeroService;

    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {

    it('should remove the selected hero from the heroes list', () => {
      component.heroes = [...heroes];

      component.delete(heroes[1]);

      expect(component.heroes.length).toBe(heroes.length - 1);
      expect(component.heroes[0]).toBe(heroes[0]);
      expect(component.heroes[1]).toBe(heroes[2]);
    });

    it('should call deleteHero with the correct data', () => {
      component.heroes = [...heroes];

      component.delete(heroes[1]);

      expect(mockHeroService.deleteHero).toBeCalled();
      expect(mockHeroService.deleteHero).toBeCalledWith(heroes[1]);
    });
  });

  describe('add', () => {

    it('should not add anything when the name is not passed', () => {
      component.heroes = [...heroes];

      component.add(null);

      expect(component.heroes.length).toBe(heroes.length);
    });

    it('should not add when there is a failure in the call', () => {
      component.heroes = [...heroes];

      component.add(null);

      expect(component.heroes.length).toBe(heroes.length);
    });

    it('should add a hero to the heroes list', fakeAsync(() => {
      component.heroes = [...heroes];

      jest.spyOn(mockHeroService, 'addHero').mockReturnValueOnce(of({
        id: 21,
        name: 'Wonder Woman',
        strength: 78
      } as Hero));

      component.add('Wonder Woman  ');
      tick();
      expect(component.heroes.length).toBe(heroes.length + 1);
    }));

  });

});
