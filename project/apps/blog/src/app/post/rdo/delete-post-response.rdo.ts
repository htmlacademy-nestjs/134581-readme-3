import { Expose } from 'class-transformer';

export class DeletePostResponseRdo {
  @Expose()
  message: string;
  @Expose()
  id: string;
}
