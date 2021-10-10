# Rescript Unicons

Rescript bindings for iconscout unicons (React).
https://iconscout.com/unicons

Optimized for tree shaking and yarn2+.

Every icon binding is a separate .res file module, and each icon module only requires the single icon it uses from `@iconscout/unicons-react/icons/{name}.js`

Because yarn2+ does not hoist modules anymore and this breaks inlining, automatic inlining is bypassed with a wrapper component in each .res module.
