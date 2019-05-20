import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'

// interface user {
// 	username: string,
	
	
// 	uid: string
// }
// {
// 	"kind": "identitytoolkit#VerifyPasswordResponse",
// 	"localId": "VQ40C5ZPDjZprHgeVYjsqB1vSgl2",
// 	"email": "abidin@univ-smb.fr",
// 	"displayName": "",
// 	"idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY1NmMzZGQyMWQwZmVmODgyZTA5ZTBkODY5MWNhNWM3ZjJiMGQ2MjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3dpdGNoLXIiLCJhdWQiOiJzd2l0Y2gtciIsImF1dGhfdGltZSI6MTU1NjM5NzQzNiwidXNlcl9pZCI6IlZRNDBDNVpQRGpacHJIZ2VWWWpzcUIxdlNnbDIiLCJzdWIiOiJWUTQwQzVaUERqWnBySGdlVllqc3FCMXZTZ2wyIiwiaWF0IjoxNTU2Mzk3NDM2LCJleHAiOjE1NTY0MDEwMzYsImVtYWlsIjoiYWJpZGluQHVuaXYtc21iLmZyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFiaWRpbkB1bml2LXNtYi5mciJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijis7z2TbW_XWNjr7x4tdCyXMzPW5NLEbPZsIwTtMhvrhMA3tclRWX8oHnUifHEqUDH0wSMFBI5lge05yFj7Z8bK_afprM7hYGJDzBz94Fo2NWB1SKlbsiydNJlryjTpGcb_ZUAjTiLRDOfVf-vCtY9GkWDuNIOWiWPsGyBmLr3jJ6sFXJsS37IP60kB4pt30bjv22LC4a3-zROrmLl2WSaSc31jz0TJwQQ75xPHmgjdHjyfguERAwNz5Dzj092wdG6R5sorzjqGUAG52ir8pe5eGsQIY03BVt4iEPuqdwuvV5gbHLQwm3rCuOfdnMinCHPEiA8wMyg0EcJEqEvtFA",
// 	"registered": true,
// 	"refreshToken": "AEu4IL2S9HzofXDkEhKSRdNDF10AqvclXuf3YafEBNp-GxiH5QCxwNlVYs_TzsU3gedt4_rxRu3d7kGcot2CKyW901DbaOsmH1jzkg9PTX66xs9VwGwWwcfy_BLP1N5OFbqVAhuWX3C-k06H7mAvyXYuI3xPC2B8hZdNoqWpr8dLyBc84U3W6mqGbPMH5apoGmvJu7oInLmg",
// 	"expiresIn": "3600"
//   }
// firstname: this.firstname,
// lastname: this.lastname,
// birthday: this.birthday,
// username: this.username,
// password: this.password,
// email: + this.username + '@univ-smb.fr'


@Injectable()
export class UserService {
	public user: any;

	constructor(private afAuth: AngularFireAuth) {

	}

	updateUser(user){
	// 	this.afAuth.auth.currentUser.updateProfile({
	// 		displayName: user.displayName,
	// 		photoURL: user.photoURL,
	// 		email: user.email
	// 	}).then(function() {
	// 		// Update successful.
	// 	}).catch(function(error) {
	// 		// An error happened.
	// 	});
	}

	setUser(user) {
		this.user = user
	}

	getUsername(): string {
		return this.user.username
	}

	reAuth(username: string, password: string) {
		return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(username + '@univ-smb.fr', password))
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}

	updateEmail(newemail: string) {
		return this.afAuth.auth.currentUser.updateEmail(newemail + '@univ-smb.fr')
	}

	async isAuthenticated() {
		if(this.user) return true

		const user = await this.afAuth.authState.pipe(first()).toPromise()

		if(user) {
			this.setUser({
				username: user.email.split('@')[0],
				uid: user.uid
			})

			return true
		}
		return false
	}

	getUID(): string {
		return this.user.uid
	}
}