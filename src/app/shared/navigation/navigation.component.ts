import { Component, Input, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent } from '../info/info.component';

@Component( {
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.scss' ]
} )
export class NavigationComponent implements AfterViewInit {

  opened = true;
  @Input() appTitle: string;
  @ViewChild( MatSidenav ) sidenav: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe( Breakpoints.Handset )
    .pipe(
      map( result => result.matches ),
      shareReplay()
    );


  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialogInfo: MatDialog
  ) { }

  ngAfterViewInit() {
    console.log( window.innerWidth );
    console.log( this.sidenav );
    if ( window.innerWidth < 768 ) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }


  @HostListener( 'window:resize', [ '$event' ] )
  onResize( event ) {
    if ( event.target.innerWidth < 768 ) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if ( width < 768 ) {
      return true;
    } else {
      return false;
    }
  }

  openDialogInfo() {
    const dialogReference = this.dialogInfo.open( InfoComponent );

    dialogReference.afterOpened().subscribe( result => {
      console.log( 'Ventana ABIERTA' );
    } );
    dialogReference.afterClosed().subscribe( result => {
      console.log( 'Ventana CERRADA' );
    } );

  }


}
