# INSTALACION

Para la instalación y mantenimiento de las herramientas usaremos HOMEBREW

## [Homebrew](https://brew.sh/)

En la consola usamos el comando

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

y para validar que este funcionando

```
brew help
```

## [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

Se usa para gestionar la mayoria de interacción con el cluster de kubernetes

```
brew install kubectl

kubectl version --client
```


## [Kustomize](https://kustomize.io/)

Se utiliza para dar "mantenimiento" a los diferentes ambientes de desarrollo (dev, stg, prd)

```
brew install kustomize
```