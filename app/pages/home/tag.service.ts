import {TAGS} from './mock-tags';
import {Injectable} from 'angular2/core';

@Injectable()
export class TagService {
  getTags() {
    return Promise.resolve(TAGS)
  }
}
