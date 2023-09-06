export class Portfolio {
  constructor(
    public id: string,
    public jobTitle: string,
    public description: string,
    public image: string,
    public skills: string[],
  ) {
    this.id = id;
    this.jobTitle = jobTitle;
    this.description = description;
    this.image = image;
    this.skills = skills;
  }
}
