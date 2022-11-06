import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private sesion: SesionService,
    private router:Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true 
      // this.sesion.obtenerSesion().pipe(
      //   map((sesion: Sesion)=>{
      //     if(sesion.usuarioActivo.admin){
      //       return true
      //     }else{
      //       alert('No tiene permiso para acceder a esta funcion')
      //       this.router.navigate(['inicio'])
      //       return false
      //     }
      //   })
      // );
  }
  
}
