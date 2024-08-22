import { Injectable } from '@angular/core'
import { IHousingLocation } from './housinglocation'

@Injectable({
	providedIn: 'root',
})
export class HousingService {
	url = 'http://localhost:3000/locations'
	async getAllHousingLocations(): Promise<IHousingLocation[]> {
		const data = await fetch(this.url)
		return (await data.json()) ?? []
	}
	async getHousingLocationById(id: number): Promise<IHousingLocation | undefined> {
		const data = await fetch(`${this.url}`).then(data => data.json())
		return (await data[id]) ?? {}
	}
	submitApplication(firstName: string, lastName: string, email: string) {
		console.log(firstName, lastName, email)
	}
}
