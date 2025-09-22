from setuptools import setup, Extension
from Cython.Build import cythonize

extensions = [
    Extension("core", ["core.py"])
]

setup(
    name="core",
    ext_modules=cythonize(extensions, compiler_directives={"language_level": "3"})
)
