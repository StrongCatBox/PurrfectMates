# PurrfectMates

API .NET 8 pour une application de mise en relation entre adoptants et propriétaires d’animaux.  
Back-end en **C# / ASP.NET Core**, BDD **SQL Server**, documentation **Swagger**.  
Front simple en **HTML/CSS/Bootstrap/JavaScript** (dossier `frontend/`).

## Fonctionnalités (MVP)
- CRUD Utilisateurs (DTOs, validation)
- CRUD Animaux (+ FKs : TypeAnimal, TailleAnimal, NiveauActivite)
- Swagger pour tester l’API
- (Optionnel) Endpoints lookups pour récupérer les libellés


## Prérequis
- .NET SDK 8
- SQL Server (local DB)
- Visual Studio 2022 (ou `dotnet CLI`)
- (Optionnel) VS Code pour le front

## Configuration
Dans `PurrfectMates.Api/appsettings.json`, renseigner la chaîne de connexion :
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=purrfectMatesDb;Trusted_Connection=True;TrustServerCertificate=True"
  },
  "Logging": { "LogLevel": { "Default": "Information", "Microsoft.AspNetCore": "Warning" } },
  "AllowedHosts": "*"
}
```
## Lancer L'API

```
dotnet restore
dotnet build
dotnet run --project PurrfectMates.Api
``` 
## Frontend

Ouvrir `frontend/index.html` (ou utiliser une extension "Live Server" VS Code).
Adapter l’URL de base de l’API dans votre JavaScript si besoin.



