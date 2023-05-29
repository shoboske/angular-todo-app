import { TestBed } from '@angular/core/testing';

import { HomepageResolver } from './homepage.resolver';

describe('HomepageResolver', () => {
  let resolver: HomepageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HomepageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
