import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Smaj} from "../../Model/ExtraData/smaj.model";
import {Delegue} from "../../Model/ExtraData/delegue.model";
import {Diocese} from "../../Model/ExtraData/diocese.model";
import {Dptmts} from "../../Model/ExtraData/dptmt.model";
import {TypeEtablissement} from "../../Model/ExtraData/typeEtablissement.model";
import {Produit} from "../../Model/ExtraData/produit.model";
import {Formatpub} from "../../Model/ExtraData/formatpub.model";
import {EmplaPub} from "../../Model/ExtraData/emplapub.model";
import {villeData} from "../../Model/ExtraData/ville.model";
import {regionData} from "../../Model/ExtraData/region.model";

@Injectable({
  providedIn: 'root'
})
export class ExtradataService {
  readonly  apiURLgetSmajData =`${environment.API_URL}/extract/sourcemaj`;
  readonly  apiURLListeDelegue =`${environment.API_URL}/liste/delegues`;
  readonly  apiURLListeDiocese =`${environment.API_URL}/extract/diocese`;
  readonly  apiURLListeDptmt =`${environment.API_URL}/extract/dptmt`;
  readonly  apiURLListeFormatPub =`${environment.API_URL}/extract/formatpub`;
  readonly  apiURLListeEmplacementPub =`${environment.API_URL}/extract/emplPub`;
  readonly  apiURLListeTypeetabl=`${environment.API_URL}/extract/typeetabl`;
  readonly  apiURLListeProduit  =`${environment.API_URL}/extract/listeProduit`;
  readonly  apiURLListeVille  =`${environment.API_URL}/extract/ville`;
  readonly  apiURLListeRegion  =`${environment.API_URL}/extract/region`;
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

                ListeFormatPub():Observable<Formatpub[]>{
                  return this.http.get<Formatpub[]>(this.apiURLListeFormatPub);
                }
                ListeEmplacPub():Observable<EmplaPub[]>{
                  return this.http.get<EmplaPub[]>(this.apiURLListeEmplacementPub);
                }

                ListeVille():Observable<villeData[]>{
                  return this.http.get<villeData[]>(this.apiURLListeVille);
                }

                ListeRegion():Observable<regionData[]>{
                  return this.http.get<regionData[]>(this.apiURLListeRegion);
                }


}
