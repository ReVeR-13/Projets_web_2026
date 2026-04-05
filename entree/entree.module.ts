import { Module } from '@nestjs/common';
import { MotifEntreeController } from './motif-entree/motif-entree.controller';
import { MotifEntreeService } from './motif-entree/motif-entree.service';
import { MotifEntreeModule } from './motif-entree/motif-entree.module';

@Module({
  controllers: [MotifEntreeController],
  providers: [MotifEntreeService],
  imports: [MotifEntreeModule]
})
export class EntreeModule {}
