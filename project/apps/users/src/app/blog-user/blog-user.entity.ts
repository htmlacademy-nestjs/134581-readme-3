import { User } from '@project/shared/shared-types';

export class BlogUserEntity implements User {
  public _id: string;
  public avatar: string;
  public dateBirth: Date;
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(blogUser: User) {
    this._id = blogUser._id;
    this.avatar = blogUser.avatar;
    this.dateBirth = blogUser.dateBirth;
    this.email = blogUser.email;
    this.firstname = blogUser.firstname;
    this.lastname = blogUser.lastname;
    this.passwordHash = blogUser.passwordHash;
  }
}
