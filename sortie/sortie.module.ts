import { Module } from '@nestjs/common';
import { MotifSortieController } from './motif-sortie/motif-sortie.controller';
import { MotifSortieService } from './motif-sortie/motif-sortie.service';
import { MotifSortieModule } from './motif-sortie/motif-sortie.module';

@Module({
  controllers: [ MotifSortieController],
  providers: [ MotifSortieService],
  imports: [ MotifSortieModule]
})
export class SortieModule {}
