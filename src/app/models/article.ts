export class Article {

    votes: number;
    link: string;
    title: string;


    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0; // this gives votes the value of votes or defaults it to 0, if no value exists.
    }

    voteUp(): any {
        this.votes += 1;
    }

    voteDown(): any {
        this.votes -= 1;
    }

    // domain() is a utility function that extracts
    // the domain from a URL
    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }

}
