import { NgModule } from '@angular/core';
// import { CdkTableModule } from '@angular/cdk/table';

// material
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const modules = [
        MatTableModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatListModule,
        MatCardModule,
        MatMenuModule,
        MatFormFieldModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonToggleModule,
];

@NgModule({
    imports: modules,
    exports: modules,
})

export class MaterialModule {}