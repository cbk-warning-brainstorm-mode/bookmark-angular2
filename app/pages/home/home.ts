"use strict";

// import Angular 2
import {Component} from "angular2/core";
import {Tag} from './tag';
import {TagService} from './tag.service';

@Component({
	selector: "page-home",
	templateUrl: "pages/home/home.template.html",
	providers: [TagService],
	directives: []
})
export class Home {

	public tags: Tag[];
	public selectedTag: Tag;

	constructor(private _tagService: TagService) {
		console.log("Home component loaded - 5");
	}

	getTags() {
		this._tagService.getTags().then(tags => this.tags = tags);
	}

	onSelect(tag: Tag) {
		this.selectedTag = tag;
	}

	onAdd(tag: string) {
		var newTag: Tag = {nome: tag, id: 0 };
		this.tags.push(newTag);
	}

	onRemove(tag: Tag) {
		this.tags.splice(this.tags.indexOf(tag));
	}

	ngOnInit() {
		this.getTags()
	}

}
