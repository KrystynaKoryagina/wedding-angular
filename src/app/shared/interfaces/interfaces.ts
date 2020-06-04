export interface SectionMeta {
	title: string;
	description?: string;
	location?: string;
	heroImage?: string;
}

export interface SectionContent {
	style: string[];
	_id: string;
	title?: string;
	url: string;
	name?: string;
	direction?: string;
	workExperience?: string;
	teachExperience?: string;
}

export interface SectionAction {
	title: string;
	url: string;
}

export interface Section {
	meta: SectionMeta;
	_id: string;
	type: string;
	content: SectionContent[];
	action: SectionAction;
}

export interface User {
	email: string;
	password: string;
}

export interface AuthResponse {
	access_token: string;
}