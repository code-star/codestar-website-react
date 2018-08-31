export interface IMeetupEvent {
	coverUrl: string;
	link: string;
	name: string;
	time: number;
	withDescription: boolean;
	description?: string;
}
export interface IFetchedMeetupEvent {
	loading: boolean;
	mEvent: IMeetupEvent | null;
	noEvent: boolean;
}

export interface IEventsContainerState {
	nextMeetupEvents: IMeetupEvent[];
	loadingNextMeetupEvent: boolean;
	noNextMeetupEvent: boolean;
	pastMeetupEvents: IMeetupEvent[];
}
