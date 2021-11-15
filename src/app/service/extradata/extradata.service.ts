import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Smaj} from "../../Model/ExtraData/smaj.model";
import {Delegue} from "../../Model/ExtraData/delegue.model";
import {Diocese} from "../../Model/ExtraData/diocese.model";
import {Dptmts} from "../../Model/ExtraData/dptmt.model";
import {TypeEtablissement} from "../../Model/ExtraData/typeEtablissement.model";
import {Produit} from "../../Model/ExtraData/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ExtradataService {
  readonly  apiURLgetSmajData =`${environment.API_URL}/extract/sourcemaj`;
  readonly  apiURLListeDelegue =`${environment.API_URL}/liste/delegues`;
  readonly  apiURLListeDiocese =`${environment.API_URL}/extract/diocese`;
  readonly  apiURLListeDptmt =`${environment.API_URL}/extract/dptmt`;
  readonly  apiURLListeTypeetabl=`${environment.API_URL}/extract/typeetabl`;
  readonly  apiURLListeProduit  =`${environment.API_URL}/extract/listeProduit`;
  constructor( private http: HttpClient ) { }
                SMajData():Observable<Smaj[]>{
                     return this.http.get<Smaj[]>(this.apiURLgetSmajData);
                }
                ListeDelegue():Observable<Delegue[]>{
                  return this.http.get<Delegue[]>(this.apiURLListeDelegue);
                }
                ListeDiocese():Observable<Diocese[]>{
                      return this.http.get<Diocese[]>(this.apiURLListeDiocese);
                }
                ListeDptmt():Observable<Dptmts[]>{
                      return this.http.get<Dptmts[]>(this.apiURLListeDptmt);
                }
                ListeTypeEtablissment():Observable<TypeEtablissement[]>{
                      return this.http.get<TypeEtablissement[]>(this.apiURLListeTypeetabl);
                }

                ListeProduct():Observable<Produit[]>{
                      return this.http.get<Produit[]>(this.apiURLListeProduit);
                }



}
