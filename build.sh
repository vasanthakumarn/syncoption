build_production='ng build --configuration=production --output-hashing all'
if [ $NODE_ENV = "production" ]; then
 echo "running $build_production ..."
 eval "$build_production"
fi