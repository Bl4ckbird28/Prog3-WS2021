cmake_minimum_required(VERSION 3.16.0)
project(Lecture VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

set (CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
include(CMakePrintHelpers)


file (GLOB_RECURSE SOURCE_FILES CONFIGURE_DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/*.cpp")

set (EXCLUDE_DIR "${CMAKE_BINARY_DIR}")
foreach (DIRECTORY ${SOURCE_FILES})
    string (FIND ${DIRECTORY} ${EXCLUDE_DIR} EXCLUDE_DIR_FOUND)
    if (NOT ${EXCLUDE_DIR_FOUND} EQUAL -1)
        list (REMOVE_ITEM SOURCE_FILES ${DIRECTORY})
        #message("excluded source file: ${DIRECTORY}")
    endif ()
endforeach(DIRECTORY)


cmake_print_variables(SOURCE_FILES)

add_executable(LectureSnippet ${SOURCE_FILES})
target_include_directories(LectureSnippet PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
target_compile_options(LectureSnippet PRIVATE -Wextra -Wconversion -Wsign-conversion)
