import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PatientDocument = HydratedDocument<Patient>;

enum BloodType {
    A = 'a',
    B = 'b',
    AB = 'ab',
    O = 'o',
  }
  @Schema ({ timestamps: true })
export class Patient {
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop({ type: String, enum: BloodType })
    BloodType: string;
    @Prop()
    file: string;
}
export const PatientSchema = SchemaFactory.createForClass(Patient);