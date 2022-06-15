const conegeometry = new THREE.ConeGeometry( 60, 80, 100 );
　const conematerial = new THREE.MeshPhongMaterial( {
　　　　　　　　　　color: 0xFF0000,
                    opacity: 0.8,
                    transparent: true,
                    side: THREE.DoubleSide,} );
　const cone = new THREE.Mesh( conegeometry, conematerial );
　scene.add( cone );