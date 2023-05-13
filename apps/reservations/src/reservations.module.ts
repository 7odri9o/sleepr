import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { DatabaseModule } from '@app/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ReservationsRepository } from './reservations.repository';
import { ReservationDocument } from './models/reservation.schema';
import { ReservationSchema } from './models/reservation.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      {
        name: ReservationDocument.name,
        schema: ReservationSchema,
      },
    ]),
    LoggerModule.forRoot(),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
