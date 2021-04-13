FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
RUN apt-get update
RUN apt-get -y install npm
WORKDIR /src
COPY ["homepage.csproj", "."]
RUN dotnet restore "homepage.csproj"
COPY . .
RUN dotnet build "homepage.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "homepage.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "homepage.dll"]