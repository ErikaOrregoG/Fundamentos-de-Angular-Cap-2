import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { ChangeNamePipe } from './pipes/change-name.pipe';
import { DirectiveSearchDirective } from './directives/directive-search.directive';
import { IndexTablePipe } from './pipes/index-table.pipe';
import { ChangeWeightPipe } from './pipes/change-weight.pipe';

const COMPONENTS = [FooterComponent,HeaderComponent,ChangeNamePipe,IndexTablePipe,DirectiveSearchDirective,IndexTablePipe,ChangeWeightPipe]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ ...COMPONENTS],
})
export class SharedModule { }
