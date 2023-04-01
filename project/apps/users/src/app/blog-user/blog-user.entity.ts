import { User } from '@project/shared/shared-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements User {
  public _id: string;
  public firstname: string;
  public lastname: string;
  public email: string;
  public dateBirth: Date;
  public avatar: string;
  public passwordHash: string;
  public numberOfPosts: number;
  public numberOfSubscribers: number;
  public creadtedAt: Date;

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

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
