import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  private baseUrl = 'http://localhost:8080'
  currentState: any;

  constructor(private http: HttpClient) { }
  
  recipeSubject = new BehaviorSubject<any>({
    recipes: [],
    loading: false,
    newRecipe: null
  })
  
  private getHeaders(): HttpHeaders{
    const token = localStorage.getItem('jwt')
      return new HttpHeaders({
        Authorization:`Bearer ${localStorage.getItem('jwt')}`
      })
    }
  getRecipes(): Observable<any>{
    const headers = this.getHeaders
    return this.http.get(`${this.baseUrl}/api/recipe`, { headers })
      .pipe(tap((recipes: any) => {
        const currentState = this.recipeSubject.value;
        this.recipeSubject.next({ ...currentState, recipes })
      }))
      
  }

  createRecipes(recipe:any): Observable<any>{
    const headers = this.getHeaders
    return this.http.post(`${this.baseUrl}/api/recipe`, { headers })
      .pipe(tap((newRecipe: any) => {
        const currentState = this.recipeSubject.value;
        this.recipeSubject.next({ ...currentState, recipes: [newRecipe, ...currentState.recipes]})
      }))
    
  }
  updateRecipes(recipe:any): Observable<any>{
    const headers = this.getHeaders
    return this.http.put(`${this.baseUrl}/api/recipe${recipe.id}`, { headers })
      .pipe(tap((updateRecipe) => {
        const currentState = this.recipeSubject.value;
        const updateRecipes = this.currentState.recipe
          .map((item: any) => item.id === updateRecipe.id
          ? updateRecipe
          : item
        )
        this.recipeSubject.next({ ...currentState, recipes:updateRecipe})
      }));
  }
}
