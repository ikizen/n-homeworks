import { func1, func2 } from './export';
func1();
func2();

import { func1 as f1, func2 as f2 } from './export';
func1();
func2();

import * as books from './homework-07.06';
books.func2('book');

