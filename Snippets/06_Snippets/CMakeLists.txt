cmake_minimum_required(VERSION 3.16.0)
project(Lecture VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

set (CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
include(CMakePrintHelpers)


#add_executable(LectureSnippet If/If.cpp)
#add_executable(LectureSnippet While/While.cpp)
add_executable(LectureSnippet For/For.cpp)

target_include_directories(LectureSnippet PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
target_compile_options(LectureSnippet PRIVATE -Wextra -Wconversion -Wsign-conversion)
