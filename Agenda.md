Auth/Auth-System:
- Api absichern
- Client mit OAuth-Client-Lib
- Claims wie Namen/Email, Scope Rollen
- Interceptor f. Access-Token

- Forms Beispiel

- Daten async abrufen (zweiter Aufruf nach dem ersten)

- Bootstrap Modalbox z.B. für CanDeactivate

- ng client und webapi für https nutzbar machen
Mit lokalem ssl-Zertifikat
dotnet dev-certs https --check --trust
dotnet dev-certs https --format pem --export-path myssl.pem --no-password
Dann 
ng serve --ssl --ssl-cert .\myssl.pem --ssl-key .\myssl.key